import linkedinImg from "../assets/linkedin.png";
import twitterImg from "../assets/twitter.png";
import facebookImg from "../assets/facebook.png";
import instagramImg from "../assets/instagram.png";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedinImg} alt="linkedin-link" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <img src={twitterImg} alt="twitter-link" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <img src={facebookImg} alt="facebook-link" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img src={instagramImg} alt="instagram-link" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
