interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="container">
      <div className="children">{children}</div>
    </div>
  )
}

export default MainLayout;
