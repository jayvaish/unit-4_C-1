// Write Code here
// Write Code here
function Image(pro) {
  const { title, src, alt, width, height } = pro;
  return (
    <div>
      <h2>{title}</h2>
      <img src={src} alt={alt} width={width} height={height} />
    </div>
  );
}
export default Image;
