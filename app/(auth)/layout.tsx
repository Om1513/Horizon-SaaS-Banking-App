import Image from "next/image";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="flex min-h-screen w-full justify-between font-inter">
          {children}
          <div>
            <div className="auth-asset">
              <Image src  = "/icons/auth-image.svg" width={800} height={800} alt="Image" />
            </div>
          </div>
      </main>
    );
  }
  