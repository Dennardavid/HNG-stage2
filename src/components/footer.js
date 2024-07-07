import Image from "next/image";

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

  const renderFooterItems = (links) =>
    links.map((link) => (
      <li key={crypto.randomUUID()} className="list-none">
        <a href={link.href}>{link.text}</a>
      </li>
    ));

  return (
    <footer className="bg-[#22252A] text-[#F8F7F7] flex flex-col items-center justify-center gap-[32px] px-[80px] pt-[48px] pb-[46px]">
      <div className="flex gap-[152px]">
        <Image src="/Ruvid_Store_Logo-white.svg" width={80} height={80} />
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
        <Image src="/copyright.svg" width={24} height={24} />
        <p>All rights reserved, Ruvid Store 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
