import { getUserId } from "../../utils/sessionStorageUtils";
import "./Profile.css";
import Files from "react-files";
import classNames from "classnames";
import {
  useAddPostMutation,
  useDeletePostMutation,
  useFetchProfileDetailsQuery,
  useUpdatePostMutation,
} from "../../store";
import {
  BACKGROUND_PHOTO,
  PROFILE_PHOTO,
} from "../../constants/postTypesConstants";
import { handlePostChange } from "./hooks/use-handle-post";
import { BsCamera } from "react-icons/bs";
import { useRef, useState, useEffect, createContext } from "react";
import AttachableModal from "../../shared/components/AttachableModal/AttachableModal";
import Modal from "../../shared/components/Modal/Modal";
import { BsFileEarmarkImageFill } from "react-icons/bs";
import { MdUpload } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { RiDragMove2Fill } from "react-icons/ri";
import { RiDeleteBin5Line } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import { HiPencil } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { TiArrowSortedDown } from "react-icons/ti";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Tabs from "../../shared/components/Tabs/Tabs";
import Posts from "./Posts/Posts";
import About from "./About/About";
import Avatar from "../../shared/view/Avatar/Avatar";
import Friends from "./Friends/Friends";

const TabsContext = createContext();

function Profile() {
  const [addPost, addPostResults] = useAddPostMutation();
  const [updatePost, updatePostResults] = useUpdatePostMutation();
  const [deletePost, deletePhotoResults] = useDeletePostMutation();

  let { userDetails, postDetails } = useFetchProfileDetailsQuery(getUserId());
  userDetails = userDetails?.data;
  postDetails = postDetails?.data;

  const [showBackgroundPhotoModal, setShowBackgroundPhotoModal] =
    useState(false);
  const [showProfilePhotoModal, setShowProfilePhotoModal] = useState(false);
  const [showDeleteBackgroundPhotoModal, setShowDeleteBackgroundPhotoModal] =
    useState(false);

  const backGroundPhoto = postDetails?.find(
    (item) => item.type === BACKGROUND_PHOTO
  );

  const profilePhoto = postDetails?.find((item) => item.type === PROFILE_PHOTO);

  const fullName = userDetails?.firstName + " " + userDetails?.surName;

  const backClassName = classNames(
    "flex items-end justify-end h-[30rem] rounded-bl-[6px] rounded-br-[6px]",
    backGroundPhoto && backGroundPhoto?.url && "!bg-no-repeat"
  );

  const profileClassName = classNames(
    "cursor-pointer rounded-[100px] inline-block h-[168px] w-[168px] mr-2 !bg-repeat-round"
  );

  const editBackgroundEl = useRef();
  const editBackgroundModalEl = useRef();
  const editProfileEl = useRef();
  const editProfileModalEl = useRef();

  const renderHeader = (tab) => {
    return (
      <div className="px-4 py-3 hover:bg-[#f3f3f3] text-[#65676B] font-[600] cursor-pointer rounded-[6px]">
        {tab.label}
      </div>
    );
  };

  const renderMoreHeader = (tab) => {
    return (
      <div className="px-4 py-3 hover:bg-[#f3f3f3] text-[#65676B] font-[600] cursor-pointer rounded-[6px] flex flex-row items-center">
        <label className="mr-2">{tab.label}</label>
        <TiArrowSortedDown />
      </div>
    );
  };

  const renderActiveHeader = (tab) => {
    return (
      <>
        <div className="px-4 py-3 text-blue font-[600] cursor-pointer rounded-[6px] flex flex-col">
          {tab.label}
        </div>
        <hr className="border-blue border-[2px]" />
      </>
    );
  };

  const renderActiveMoreHeader = (tab) => {
    return (
      <>
        <div className="px-4 py-3 text-blue font-[600] cursor-pointer rounded-[6px] flex flex-row items-center">
          <label className="mr-2">{tab.label}</label>
          <TiArrowSortedDown />
        </div>
        <hr className="border-blue border-[2px]" />
      </>
    );
  };

  const handleOnClick = (button) => {
    console.log("button clicked !");
  };

  const [activeTab, setActiveTab] = useState("posts");

  const [activeVerticalTab, setActiveVerticalTab] = useState("overview");

  const [showMoreModal, setShowMoreModal] = useState(false);

  const moreButtonRef = useRef(null);

  const moreModalRef = useRef(null);

  const moreButtonOptions = [
    {
      id: "sports",
      label: "Sports",
    },
    {
      id: "music",
      label: "Music",
    },
    {
      id: "films",
      label: "Films",
    },
    {
      id: "tv",
      label: "TV programmes",
    },
    {
      id: "books",
      label: "Books",
    },
    {
      id: "likes",
      label: "Likes",
    },
    {
      id: "events",
      label: "Events",
    },
    {
      id: "reviews",
      label: "Reviews given",
    },
    {
      id: "groups",
      label: "Groups",
    },
    {
      id: "sections",
      label: "Manage Sections",
    },
  ];

  const tabOptions = [
    {
      id: "posts",
      label: "Posts",
      type: "tab",
      renderHeader,
      renderActiveHeader,
      content: <Posts userDetails={userDetails} />,
    },
    {
      id: "about",
      label: "About",
      type: "tab",
      renderHeader,
      renderActiveHeader,
      content: <About />,
    },
    {
      id: "friends",
      label: "Friends",
      type: "tab",
      renderHeader,
      renderActiveHeader,
      content: <Friends />,
    },
    {
      id: "photos",
      label: "Photos",
      type: "tab",
      renderHeader,
      renderActiveHeader,
      content: "Photos content in progress!",
    },
    {
      id: "videos",
      label: "Videos",
      type: "tab",
      renderHeader,
      renderActiveHeader,
      content: "Videos content in progress!",
    },
    {
      id: "sports",
      label: "Sports",
      type: "tab",
      renderHeader,
      renderActiveHeader,
      content: "Sports content in progress!",
    },
    {
      id: "more",
      label: "More",
      type: "button",
      renderHeader: (tab) => renderMoreHeader(tab),
      renderActiveHeader: (tab) => renderActiveMoreHeader(tab),
      content: "More content in progress!",
      renderButton: (button) => {
        return (
          <div className="w-[fit-content]">
            <div
              className="px-4 py-3 hover:bg-[#f3f3f3] text-[#65676B] font-[600] cursor-pointer rounded-[6px] flex flex-row items-center relative"
              ref={moreButtonRef}
            >
              <label className="mr-2">{button.label}</label>
              <TiArrowSortedDown />
            </div>
          </div>
        );
      },
      onClick: (button) => {
        setShowMoreModal(true);
      },
    },
    {
      id: "button",
      label: "",
      type: "button",
      renderButton: (_button) => {
        return (
          <button className="btn-secondary px-4 inline-block float-right mt-2">
            <HiOutlineDotsHorizontal />
          </button>
        );
      },
      onClick: (button) => handleOnClick(button),
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event, targetEl, modalEl, setShowModal) => {
      if (!targetEl?.current) return;

      if (
        !targetEl?.current?.contains(event?.target) &&
        !modalEl?.current?.contains(event?.target)
      ) {
        setShowModal(false);
      }
    };

    const handleBackgroundClick = (event) => {
      handleClickOutside(
        event,
        editBackgroundEl,
        editBackgroundModalEl,
        setShowBackgroundPhotoModal
      );
    };

    const handleProfileClick = (event) => {
      handleClickOutside(
        event,
        editProfileEl,
        editProfileModalEl,
        setShowProfilePhotoModal
      );
    };

    const handleMoreModalClick = (event) => {
      handleClickOutside(event, moreButtonRef, moreModalRef, setShowMoreModal);
    };

    document.addEventListener("click", handleBackgroundClick, true);
    document.addEventListener("click", handleProfileClick, true);
    document.addEventListener("click", handleMoreModalClick, true);

    return () => {
      document.removeEventListener("click", handleBackgroundClick);
      document.removeEventListener("click", handleProfileClick);
      document.removeEventListener("click", handleMoreModalClick);
    };
  }, []);

  const handleDeleteBackgroundPhoto = () => {
    deletePost({
      id: backGroundPhoto?.id,
    });
  };

  const backGroundPhotoModal = (
    <AttachableModal
      targetElementRef={editBackgroundEl}
      alignVertically={"below"}
      alignHorizontally={"right"}
    >
      <div className="cover-photo" ref={editBackgroundModalEl}>
        <div>
          <BsFileEarmarkImageFill className="mr-3" />
          Choose cover photo
        </div>
        <Files
          className="cursor-pointer"
          clickable
          accepts={["image/*"]}
          onChange={(files) => {
            handlePostChange(
              files,
              backGroundPhoto,
              BACKGROUND_PHOTO,
              !backGroundPhoto?.url ? addPost : updatePost
            );
            setShowBackgroundPhotoModal(false);
          }}
        >
          <MdUpload className="mr-3" />
          Upload photo
        </Files>
        <div>
          <RxAvatar className="mr-3" />
          Create avatar cover photo
        </div>
        <div>
          <RiDragMove2Fill className="mr-3" />
          Reposition
        </div>
        {backGroundPhoto && backGroundPhoto?.url && (
          <>
            <hr className="mb-1 mt-1 px-1" />
            <div
              onClick={() => {
                setShowDeleteBackgroundPhotoModal(true);
                setShowBackgroundPhotoModal(false);
              }}
            >
              <RiDeleteBin5Line className="mr-3" />
              Remove
            </div>
          </>
        )}
      </div>
    </AttachableModal>
  );

  const profilePhotoModal = (
    <AttachableModal
      targetElementRef={editProfileEl}
      alignVertically={"above"}
      alignHorizontally={"center"}
    >
      <div ref={editProfileModalEl} className="profile-photo">
        <Files
          clickable
          accepts={["image/*"]}
          onChange={(files) => {
            handlePostChange(
              files,
              profilePhoto,
              PROFILE_PHOTO,
              !profilePhoto?.url ? addPost : updatePost
            );
            setShowProfilePhotoModal(false);
          }}
        >
          <BsCamera className="mr-2" />
          Choose Profile Picture
        </Files>
        <div>
          <RxAvatar className="mr-2" />
          Create avatar profile picture
        </div>
      </div>
    </AttachableModal>
  );

  const deleteBackgroundPhotoModal = (
    <Modal>
      <div className="remove-cover-photo">
        <div>
          <h2 className="inline-flex w-[90%] justify-center">
            Remove cover photo
          </h2>
          <div
            className="inline-flex p-2 border-[1px] rounded-[100px] bg-[silver] cursor-pointer"
            onClick={() => setShowDeleteBackgroundPhotoModal(false)}
          >
            <ImCross />
          </div>
        </div>
        <hr className="mt-2" />
        <div className="mb-8 ml-2 mt-1">
          Are you sure you want to remove your cover photo?
        </div>
        <div className="flex flex-row justify-end">
          <button
            className="hover:bg-[#f3f3f3] py-2 px-8 rounded-[6px] text-blue text-primary mr-2"
            onClick={() => setShowDeleteBackgroundPhotoModal(false)}
          >
            Cancel
          </button>
          <button
            className="bg-blue text-white rounded-[6px] text-primary py-2 px-8"
            onClick={() => {
              setShowDeleteBackgroundPhotoModal(false);
              handleDeleteBackgroundPhoto();
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </Modal>
  );

  return (
    <>
      <div className="profile">
        {showMoreModal && (
          <AttachableModal
            className="w-[20rem]"
            targetElementRef={moreButtonRef}
            alignVertically={"below"}
            alignHorizontally={"left"}
            useRef={moreModalRef}
          >
            {moreButtonOptions.map((option) => {
              return (
                <button
                  className="btn-transparent p-2 w-full text-left text-[#050505] font-homePrimary font-[600]"
                  key={option.id}
                >
                  {option.label}
                </button>
              );
            })}
          </AttachableModal>
        )}
        <div
          style={{
            backgroundImage: backGroundPhoto
              ? `url("${backGroundPhoto?.url}")`
              : undefined,
            backgroundColor: !backGroundPhoto ? "#f3f3f3" : "transparent",
            backgroundSize: "100% 100%",
          }}
          className={backClassName}
        >
          <div
            onClick={() => setShowBackgroundPhotoModal(true)}
            ref={editBackgroundEl}
            className="mr-8 mb-4 rounded-[6px] px-[12px] py-[6px] text-[white] bg-[#00000066] border-[inherit] border-[1px] font-bold pointer-events-auto cursor-pointer"
          >
            <div className="flex flex-row items-center">
              <BsCamera className="mr-2 text-primary" />
              {!backGroundPhoto?.url ? "Add Cover Photo" : "Edit Cover Photo"}
            </div>
          </div>
          {showBackgroundPhotoModal && backGroundPhotoModal}
          {showDeleteBackgroundPhotoModal && deleteBackgroundPhotoModal}
        </div>
        <div className="flex flex-row justify-between px-[2rem]">
          <div className="flex flex-row">
            <div className="mt-[-5rem]" ref={editProfileEl}>
              {profilePhoto?.url && (
                <div
                  className={profileClassName}
                  onClick={() => setShowProfilePhotoModal(true)}
                  style={{
                    background: `url("${profilePhoto?.url}")`,
                  }}
                ></div>
              )}
              {!profilePhoto?.url && (
                <Avatar
                  className={profileClassName + " !bg-[black]"}
                  onClick={() => setShowProfilePhotoModal(true)}
                />
              )}
            </div>
            {showProfilePhotoModal && profilePhotoModal}
            <div className="flex flex-col">
              <h1 className="text-[#050505]">{fullName}</h1>
              <a
                href="fgh"
                className="font-[600] text-primary text-[#65676B] hover:underline"
              >
                75 friends
              </a>
            </div>
          </div>
          <div className="profile-photo-section">
            <div className="flex flex-row items-center">
              <button className="btn-primary px-4 justify-between mr-2">
                <label className="mr-2 cursor-pointer">+</label>
                <label className="cursor-pointer">Add to story</label>
              </button>
              <button className="btn-secondary px-4 justify-between mr-2">
                <HiPencil className="mr-2 cursor-pointer" />
                <label className="cursor-pointer">Edit profile</label>
              </button>
              <button className="btn-secondary py-3 px-4 justify-between">
                <IoIosArrowDown className="cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
        <div className="tab-container">
          <hr className="mx-auto mt-4 mb-1" />
          <TabsContext.Provider
            value={{
              activeTab,
              setActiveTab,
              activeVerticalTab,
              setActiveVerticalTab,
            }}
          >
            <Tabs
              tabs={tabOptions}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </TabsContext.Provider>
        </div>
      </div>
    </>
  );
}

export default Profile;
export { TabsContext };
