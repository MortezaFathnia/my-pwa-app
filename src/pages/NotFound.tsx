import image from '../statics/notfound.png';

const NotFound = () => {
  return (
    <div style={{display:"flex",justifyContent:'center',alignItems:'center',height:'100vh',width:'100%'}}>
       <img src={image} alt="logo" />
    </div>
  );
};
export default NotFound;
