
const Footer = () => {

  const studioLink = 'https://image.spreadshirtmedia.net/image-server/v1/compositions/T31A1PA29PT10X0Y5D168372802W5943H5943/views/1,width=550,height=550,appearanceId=1,backgroundColor=FFFFFF,noPt=true/fehler-404-seite-nicht-gefunden-it-fun-tasse.jpg';

  return (
    <>
      {/* <div className="footerMargin"></div> */}
      <div className="footerContainer">
        <p>
          <span>&#169; </span> 
          <a href={studioLink}>2023 Diggedi Design</a>
        </p>
      </div>
    </>
  )
};
export default Footer;