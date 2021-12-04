import { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../../actions';
import {
  motion,
  useMotionValue,
  AnimateSharedLayout,
  AnimatePresence,
} from 'framer-motion';
import classNames from 'classnames';
import './messageList.scss';
import trash from '../../statics/trash-alt.png';
import FiltersMessage from './FiltersMessage';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import api from '../../apis/jsonplaceholder';

type Props = {
  fetchPosts: Function;
  deletePost: Function;
  posts: any;
};
type Post = {
  userId: number;
  title: string;
  body: string;
  id: number;
};
const MessageList = (props: Props) => {
  const [APIData, setAPIData] = useState([]);
  const [filteredResults, setFilteredResults] = useState(APIData);
  const [filters, setFilters] = useState(0);
  useEffect(() => {
    api.get('/posts').then((response) => {
      setAPIData(response.data);
    });
  }, []);
  const [open, setOpen] = useState(false);
  let targetMessage: any = useRef({});
  const onCloseModal = () => setOpen(false);
  const onOpenModal = () => setOpen(true);

  const x = useMotionValue(0);

  const Item = ({ post }: any) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
      <motion.li
        layout
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x }}
        onDragEnd={toggleOpen}
      >
        <motion.div className="avatar" layout />
        <div className={classNames('message-item', { 'is-open': isOpen })}>
          <div className={classNames('message-body', { 'is-open': isOpen })}>
            <div className="image-wrapper">
              <img
                className="user-image"
                src={require(`../../statics/user/${post.userId}.jpg`).default}
                alt=""
              />
            </div>
            <div className="content">
              <div className="title">
                <p>{post.title.substring(0, 10)}</p>
              </div>
              <div className="description">
                <p>{post.body.substring(0, 70)}</p>
              </div>
            </div>
          </div>
          <AnimatePresence>{isOpen && <Content post={post} />}</AnimatePresence>
        </div>
      </motion.li>
    );
  };
  const Content = ({ post }: { post: Post }) => {
    return (
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="btn-delete-wrapper"
      >
        <button
          onClick={() => {
            onOpenModal();
            targetMessage.current = { ...post };
          }}
        >
          <div className="img-btn-wrapper">
            <img src={trash} alt="delete" />
          </div>
        </button>
      </motion.div>
    );
  };

  const filterMessages = (id: number) => {
    setFilters(id);

    if (id) {
      let filteredData = [];
      filteredData = APIData.filter((item: any) => item.userId === id);
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(APIData);
    }
  };
  const removeItem = () => {
    onCloseModal();
    props.deletePost(targetMessage.current.id);
    //props.fetchPosts();
  };
  const renderModal = () => {
    return (
      <Modal open={open} onClose={onCloseModal} center>
        <div className="modal-wrapper">
          <div>
            <h2 className="modal-title">Confirm Delete</h2>
            <p className="modal-content">?Are you sure to delete</p>
          </div>
          <div className="btn-modal-wrapper">
            <button className="btn btn--gray" onClick={onCloseModal}>
              Cancel
            </button>
            <button className="btn btn--danger" onClick={removeItem}>
              Confirm
            </button>
          </div>
        </div>
      </Modal>
    );
  };
  return (
    <div>
      {renderModal()}
      {filters !== 0 ? (
        <AnimateSharedLayout>
          <FiltersMessage onSelected={filterMessages} />
          <motion.ul layout initial={{ borderRadius: 25 }}>
            <div className="message-list">
              {Object.keys(filteredResults).map((keyName: any) => (
                <Item post={filteredResults[keyName]} key={keyName} />
              ))}
            </div>
          </motion.ul>
        </AnimateSharedLayout>
      ) : (
        <AnimateSharedLayout>
          <FiltersMessage onSelected={filterMessages} />
          <motion.ul layout initial={{ borderRadius: 25 }}>
            <div className="message-list">
              {Object.keys(APIData).map((keyName: any) => (
                <Item post={APIData[keyName]} key={keyName} />
              ))}
            </div>
          </motion.ul>
        </AnimateSharedLayout>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts, deletePost })(
  MessageList
);
