import MainContainer from "@/components/MainContainer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div id="sss" className="flex justify-items-start bg-[#181818]  ">
        {/* Sidebar */}
        <Sidebar />

        {/* Right */}
        <div
          id="main"
          className="top-0 w-[86%] md:w-[92%] lg:w-[84%] flex-1  overflow-y-scroll px-3"
        >
          <Navbar />
          <MainContainer>{children}</MainContainer>
        </div>
      </div>
    </>
  );
}
