const Header = () => {

  const helpLink = 'https://static.demilked.com/wp-content/uploads/2021/08/61249759c3478-4-61234b63116e0__700.jpg'
  const aboutLink = 'https://miro.medium.com/v2/resize:fit:756/1*KcQUEkOQ1LoMDHkMZ-Yymw.jpeg';
  return (
    <header>
      <p>Todo App</p>
      <div>
        <a href={aboutLink} target="_blank" rel="noreferrer">About</a>
        <a href={helpLink} target="_blank" rel="noreferrer">Help</a>
      </div>
    </header>
  )
};
export default Header;