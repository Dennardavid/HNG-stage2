import Image from "next/image";
import Link from "next/link";

function Footer() {
  const footerLinks = [
    [
      { href: "/", text: "Contact us" },
      { href: "/", text: "FAQ" },
      { href: "/", text: "Service Center" },
      { href: "/", text: "Report a product" },
    ],
    [
      { href: "/", text: "Help center" },
      { href: "/", text: "Dispute Policy" },
      { href: "/", text: "Return Policy" },
      { href: "/", text: "Chat with us" },
    ],
    [
      { href: "/", text: "Privacy Notice" },
      { href: "/", text: "Cookie Notice" },
      { href: "/", text: "Official stores" },
      { href: "/", text: "Flash Sales" },
    ],
    [
      { href: "/", text: "Payment And Deliveries" },
      { href: "/", text: "Be a Sales Consultant" },
      { href: "/", text: "Service Partners" },
      { href: "/", text: "Our Locations" },
    ],
  ];

  const mobileFooter = [
    {
      src: "https://res.cloudinary.com/dsngkhlct/image/upload/v1720568027/home_yn5gal.svg",
      text: "Home",
    },
    {
      src: "https://res.cloudinary.com/dsngkhlct/image/upload/v1720568027/wishlist_neve4i.svg",
      text: "Explore",
    },
    {
      src: "https://res.cloudinary.com/dsngkhlct/image/upload/v1720568026/services_ab1umy.svg",
      text: "Cart",
    },
    {
      src: "https://res.cloudinary.com/dsngkhlct/image/upload/v1720568026/messages_ckrfvz.svg",
      text: "Wishlist",
    },
    {
      src: "https://res.cloudinary.com/dsngkhlct/image/upload/v1720568061/account_t3lz0e.svg",
      text: "profile",
    },
  ];

  const renderFooterItems = (links) =>
    links.map((link) => (
      <li key={crypto.randomUUID()} className="list-none">
        <a href={link.href}>{link.text}</a>
      </li>
    ));

  const renderMobileFooterItems = (pages) =>
    pages.map((page) => (
      <Link href="/" key={crypto.randomUUID()}>
        <Image src={page.src} width={40} height={40} alt={page.text} />
      </Link>
    ));

  return (
    <footer className="fixed bottom-0 left-0 w-full ">
      <div className="lg:hidden flex justify-evenly items-center border-[0.5px] border-t-[#f2f1f0] pt-2 pb-2">
        {renderMobileFooterItems(mobileFooter)}
      </div>
      <div className="hidden lg:bg-[#22252A] lg:text-[#F8F7F7] lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-[32px] lg:px-[80px] lg:pt-[48px] lg:pb-[46px]">
        <div className="flex gap-[152px]">
          <Image
            src="https://res.cloudinary.com/dsngkhlct/image/upload/v1720540378/Ruvid_Store_Logo-white_z1inpz.svg"
            width={80}
            height={80}
            className="cursor-pointer"
          />
          <div className="flex gap-[152px] pt-[20px] pb-[10px]">
            {footerLinks.map((links, index) => (
              <div key={index}>
                <ul className="flex flex-col gap-[6px]">
                  {renderFooterItems(links)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-[11px] justify-center">
          <Image
            src="https://res.cloudinary.com/dsngkhlct/image/upload/v1720540361/copyright_qxf1vx.svg"
            width={24}
            height={24}
          />
          <p>All rights reserved, Ruvid Store 2024</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
