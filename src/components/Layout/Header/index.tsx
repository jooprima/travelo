import Image from "next/image";
import Container from "components/Container";
import traveloLogo from "public/assets/travelo-logo-header.png";

export const Header = () => {
  return (
    <header className="h-[85px] bg-white shadow-lg p-4">
      <Container>
        <div className="flex justify-between items-center">
          <Image
            src={traveloLogo}
            alt="Travelo Logo"
            placeholder="blur"
            height="48"
            width="182"
          />
        </div>
      </Container>
    </header>
  );
};
