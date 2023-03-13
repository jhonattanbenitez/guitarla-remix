import image from '../../public/img/about-us.jpg';

export function meta() {
  return {
    title: 'Guitar LA- About us',
    description:
      'Located in the heart of Los Angeles, the Guitar Emporium is a mecca for musicians and guitar enthusiasts alike. As soon as you step through the doors of this iconic store, you are greeted with a breathtaking display of guitars, amps, and accessories that will leave any musician in awe. The walls are adorned with classic rock memorabilia, and the sound of skilled guitarists testing out instruments fills the air. The store boasts an impressive selection of guitars, ranging from vintage Fenders to modern Gibsons, as well as a vast array of boutique pedals and amps. With a knowledgeable staff that is passionate about all things guitar-related, the Guitar Emporium is the go-to destination for anyone looking to find their perfect instrument in the city of angels.',
  };
}
export function links() {
  return [
    {
      rel: 'preload',
      href: image,
      as: 'image',
    },
  ];
}
function AboutUs() {
  return (
    <main>
      <div className="o-container">
        <h2 className="c-heading">About Us</h2>
        <div className="c-content">
          <img src={image} alt="about us image" />
          <div>
          <p className='c-content__paragraph'>
            Located in the heart of Los Angeles, the Guitar LA is a mecca for
            musicians and guitar enthusiasts alike.
          </p>
          <p className='c-content__paragraph'>
            As soon as you step through the doors of this iconic store, you are
            greeted with a breathtaking display of guitars, amps, and
            accessories that will leave any musician in awe.
          </p>
          <p className='c-content__paragraph'>
            The walls are adorned with classic rock memorabilia, and the sound
            of skilled guitarists testing out instruments fills the air.
          </p>
          <p className='c-content__paragraph'>
            The store boasts an impressive selection of guitars, ranging from
            vintage Fenders to modern Gibsons, as well as a vast array of
            boutique pedals and amps.
          </p>
          <p className='c-content__paragraph'>
            With a knowledgeable staff that is passionate about all things
            guitar-related, the Guitar LA is the go-to destination for anyone
            looking to find their perfect instrument in the city of angels.
          </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AboutUs;
