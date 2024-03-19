import "./Background.css";

export const Background = () => {
  console.log("bg");
  return (
    <div>
      <div className='bg'></div>
      <div className='star-field'>
        <div className='layer'></div>
        <div className='layer'></div>
        <div className='layer'></div>
      </div>
    </div>
  );
};
