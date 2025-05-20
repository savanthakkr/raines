import Link from "next/link";

const CertificateCard = ({
    id,
    title,
    slug,
    image,
    issued_date,
}) => {
    return (
        <div className="col-lg-3 col-md-6 d-flex">
            <div className="certificate-box h-80">
                <div className="certificate-image">
                    <Link href={`/certificate/${slug}`}>
                        <a className="d-block image">
                            <img src={image} alt={title} />
                        </a>
                    </Link>
                </div>
                <div className="certificate-content">
                    <div className="d-flex flex-row justify-content-between align-items-start">
                        <h3 className="title">
                            <Link href={`/profile/certificates`}>
                                <a title={title}>{title}</a>
                            </Link>
                        </h3>
                        <img src="/images/img/certificate-arrow.png" />
                    </div>
                    <div className="date">Issued Date: {issued_date}</div>
                    <div className="d-flex flex-row links">
                        <Link href="">
                            <a>Preview</a>
                        </Link>
                        <Link href="">
                            <a>Download</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CertificateCard;