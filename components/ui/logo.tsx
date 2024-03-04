import Link from "next/link";
import Image from "next/image";
import ragas from "@/public/images/ragas.svg";

export default function Logo() {
  return (
    <Link
      className="inline-flex"
      href="/"
      aria-label="Cruip"
    >
      <Image
        className="max-w-none"
        src={ragas}
        width={38}
        height={38}
        priority
        alt="Stellar"
      />
    </Link>
  );
}
