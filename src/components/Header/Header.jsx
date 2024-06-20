import profileImg from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div>
             <div className="flex justify-between mx-20 my-8 border-b-2 pb-4">
            <h3 className="text-3xl font-bold">Knowledge Cafe </h3>
            <img src={profileImg} alt="" />
            </div>
        </div>
    );
};

export default Header;