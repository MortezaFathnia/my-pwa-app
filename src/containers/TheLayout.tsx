import TheFooter from './theFooter/TheFooter';
import TheHeader from './theHeader/TheHeader';

const TheLayout = (props:any) => {
  return (
    <div className="ui container">
      <TheHeader />
      <div className="content">
        {props.children}
      </div>
      <TheFooter />
    </div>
  );
};

export default TheLayout;
