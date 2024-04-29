export default Image = ({src='logo.svg'}) => (
    <img
    style={{ border: "4px solid #479fb2" }}
    src={require(`@site/static/img/${src}`).default}
    alt="Example banner"
  />
  );
  