import "./movieblock.css";

const MovieBlock = ({ title, img, id }) => {
  return (
    <div id={id} className="movie">
      <img src={img} alt="" className="movie_img" />
      <h3 className="movie_title">
        <strong>{title}</strong>
      </h3>
    </div>
  );
};

export default MovieBlock;
