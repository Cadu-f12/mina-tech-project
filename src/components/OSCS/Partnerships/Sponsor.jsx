import "./Sponsor.css";

export default function Sponsor({ image, alt, url }) {
    return (
        <a
            className="sponsor-link"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                className="sponsor-image"
                src={image}
                alt={alt}
            />
        </a>
    );
}