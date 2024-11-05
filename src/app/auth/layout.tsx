const AuthLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="h-screen bg-[#f2f2f3] flex items-center justify-center ">
            {children}
        </div>
    );
}

export default AuthLayout;