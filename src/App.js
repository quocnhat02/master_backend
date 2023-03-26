import './App.css';

function YoutubeItem(props) {
  return (
    <div className='youtube-item'>
      <div className='youtube-image'>
        <img src={props.image} />
      </div>
      <div className='youtube-footer'>
        <div className='youtube-avatar'>
          <img
            src='https://res.cloudinary.com/practicaldev/image/fetch/s--4h1_TJud--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zd6p2ia2bn6ba6t8j11o.png'
            width='50px'
          />
        </div>
        <div className='youtube-info'>
          <h3 className='youtube-heading'>Title</h3>
          <h4 className='youtube-author'>{props.author}</h4>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <YoutubeItem
        image='https://res.cloudinary.com/practicaldev/image/fetch/s--4h1_TJud--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zd6p2ia2bn6ba6t8j11o.png'
        author='NhatDev'
      />
    </div>
  );
}

export default App;
