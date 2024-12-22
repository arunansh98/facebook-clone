import Card from "../../../shared/components/Card/Card";
import TextAreaInput from "../../../shared/components/TextAreaInput/TextAreaInput";
import { useUpdateUserDetailsMutation } from "../../../store";
import "./Posts.css";
import { useContext, useState } from "react";
import { MdOutlinePublic } from "react-icons/md";
import Modal from "../../../shared/components/Modal/Modal";
import { VscClose } from "react-icons/vsc";
import BlueOutlineAnchor from "../../../shared/components/BlueOutlineAnchor/BlueOutlineAnchor";
import { TabsContext } from "../Profile";
import Avatar from "../../../shared/view/Avatar/Avatar";
import { FaVideo } from "react-icons/fa6";
import { MdPhotoLibrary } from "react-icons/md";
import { FaFlag } from "react-icons/fa6";
import { GiSettingsKnobs } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import { FaList } from "react-icons/fa";
import Tabs from "../../../shared/components/Tabs/Tabs";
import { RiLayoutGridFill } from "react-icons/ri";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { RiTimer2Fill } from "react-icons/ri";
import { MdGroups2 } from "react-icons/md";
import { FaBaby } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa6";
import { BiShare } from "react-icons/bi";
import { BsEmojiLaughing } from "react-icons/bs";
import { GoSmiley } from "react-icons/go";
import { CiCamera } from "react-icons/ci";
import { HiOutlineGif } from "react-icons/hi2";
import { LuSticker } from "react-icons/lu";

function Posts({ userDetails }) {
  const { setActiveTab, setActiveVerticalTab } = useContext(TabsContext);

  const [showBioInput, setShowBioInput] = useState(false);

  const [updateUserDetails, updateUserDetailsResults] =
    useUpdateUserDetailsMutation();

  const bio = userDetails?.bio ? userDetails?.bio : "";

  const [bioInput, setBioInput] = useState(bio);

  const [showEditDetailsModal, setShowEditDetailsModal] = useState(false);

  const editDetailsFields = [
    {
      id: "work",
      label: "Work",
      values: [{ label: "Add a workplace", href: "work" }],
    },
    {
      id: "education",
      label: "Education",
      values: [
        { label: "Add secondary school", href: "work" },
        { label: "Add university", href: "work" },
      ],
    },
    {
      id: "current",
      label: "Current town/city",
      values: [{ label: "Add current city", href: "places" }],
    },
    {
      id: "home",
      label: "Home town",
      values: [{ label: "Add home town", href: "places" }],
    },
    {
      id: "relation",
      label: "Relationship",
      values: [{ label: "Add relationship status", href: "family" }],
    },
  ];

  const leftCards = (
    <div className="left-cards">
      <Card className="p-[15px]">
        <h2>Intro</h2>
        {bio && <span className="block text-center">{bio}</span>}
        {!showBioInput && (
          <button
            className="btn-wide"
            onClick={() => {
              setBioInput(bio);
              setShowBioInput(true);
            }}
          >
            {bio ? "Edit Bio" : "Add Bio"}
          </button>
        )}
        {showBioInput && (
          <>
            <TextAreaInput
              placeholder="Describe who you are"
              maxLength="101"
              value={bioInput}
              onChange={(event) => setBioInput(event.target.value)}
            />
            <div className="flex flex-row justify-end text-[13px] text-[#65676B]">
              {101 - bioInput.length} characters remaining
            </div>
            <div className="flex flex-row justify-between items-center mt-2">
              <span className="text-primary font-normal flex flex-row items-center">
                <MdOutlinePublic className="mr-1 text-[23px]" />
                Public
              </span>
              <div className="flex">
                <button
                  className="btn-secondary btn-small mr-2"
                  onClick={() => {
                    setBioInput("");
                    setShowBioInput(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  disabled={bioInput === bio}
                  className="btn-small save"
                  onClick={() => {
                    setShowBioInput(false);
                    updateUserDetails({
                      id: userDetails.id,
                      bio: bioInput,
                    });
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </>
        )}
        <button
          className="btn-wide"
          onClick={() => setShowEditDetailsModal(true)}
        >
          Edit details
        </button>
        <button className="btn-wide">Add Featured</button>
      </Card>
      <Card className="p-[15px] flex flex-row justify-between items-center">
        <h2>Photos</h2>
        <button className="transparent-button">See All Photos</button>
      </Card>
      <Card className="p-[15px] flex flex-row justify-between items-center">
        <h2>Friends</h2>
        <button className="transparent-button">See All Friends</button>
      </Card>
    </div>
  );

  const renderHeader = (tab) => {
    return (
      <button className="btn-transparent cursor-pointertext-[#65676B] flex items-center w-full justify-center">
        {tab.label}
      </button>
    );
  };

  const renderActiveHeader = (tab) => {
    return (
      <>
        <button className="btn-transparent cursor-pointer w-full text-blue flex items-center justify-center">
          {tab.label}
        </button>
        <hr className="border-blue border-[2px]" />
      </>
    );
  };

  const listViewContent = (
    <Card className="posts-tabs-content">
      <div className="flex items-center justify-between">
        <button className="flex items-center">
          <Avatar className="h-[40px] w-[40px] mr-2" />
          <div className="flex flex-col items-start">
            <a className="font-[600]">Arunansh Srivastava</a>
            <a className="text-[#65676B] text-[13px] flex items-center">
              15 February 1998
              <RiTimer2Fill className="h-[17px] w-[17px] ml-2 cursor-default" />
              <MdGroups2 className="h-[17px] w-[17px] ml-2 cursor-default" />
            </a>
          </div>
        </button>
        <button className="btn-transparent p-3 rounded-[100px]">
          <HiOutlineDotsHorizontal />
        </button>
      </div>
      <h2 className="flex flex-col items-center font-[400] mb-4">
        <FaBaby className="text-[white] bg-blue rounded-[100px] p-[0.35rem] h-[35px] w-[35px] mb-1" />
        Born on 15 February 1998
      </h2>
      <hr className="mb-1" />
      <div className="flex items-center mb-1">
        <button className="btn-transparent text-[#65676B] w-[33%] flex items-center justify-center">
          <AiOutlineLike className="mr-1" />
          Like
        </button>
        <button className="btn-transparent text-[#65676B] w-[33%] flex items-center justify-center">
          <FaRegComment className="mr-1" />
          Comment
        </button>
        <button className="btn-transparent text-[#65676B] w-[33%] flex items-center justify-center">
          <BiShare className="mr-1 rotate-[180deg]" />
          Share
        </button>
      </div>
      <hr className="mb-1" />
      <div className="flex items-center">
        <button className="mr-2">
          <Avatar className="h-[32px] w-[32px]" />
        </button>
        <TextAreaInput className="textarea" placeholder="Write a comment..." />
        <div className="absolute right-[1.7rem] flex items-center cursor-pointer w-[130px]">
          <button className="btn-secondary mr-1 rounded-[10px] p-1 h-[2rem] w-[2rem]">
            <BsEmojiLaughing />
          </button>
          <button className="btn-secondary mr-1 rounded-[10px] p-1 h-[2rem] w-[2rem]">
            <GoSmiley />
          </button>
          <button className="btn-secondary mr-1 rounded-[10px] p-1 h-[2rem] w-[2rem]">
            <CiCamera />
          </button>
          <button className="btn-secondary mr-1 rounded-[10px] p-1 h-[2rem] w-[2rem]">
            <HiOutlineGif />
          </button>
          <button className="btn-secondary mr-1 rounded-[10px] p-1 h-[2rem] w-[2rem]">
            <LuSticker />
          </button>
        </div>
      </div>
    </Card>
  );

  const gridViewContent = (
    <Card className="posts-tabs-content">
      <h2>February 1998</h2>
      <Card className="w-[fit-content] flex flex-col items-center mt-3 p-[1rem] hover:bg-grey cursor-pointer w-[29.9%]">
        <FaBaby className="text-[white] bg-blue rounded-[100px] p-[0.35rem] h-[35px] w-[35px] mb-1" />
        <span className="font-bold text-center mb-8">
          Arunansh Srivastava was born on 15 February 1998
        </span>
        <div className="flex items-center">
          <Avatar className="mr-1 w-[36px] h-[36px]" />
          <span className="text-[12px] text-[#65676B] mr-1">
            27 January 1993
          </span>
          <RiTimer2Fill className="mr-1" />
          <MdGroups2 />
        </div>
      </Card>
    </Card>
  );

  const [activePostsTab, setActivePostsTab] = useState("list");

  const rightCards = (
    <div className="right-cards">
      <Card className="p-[15px]">
        <div className="flex items-center mb-3">
          <Avatar className="h-[40px] w-[40px]" />
          <button
            style={{ width: "calc(100% - 40px)" }}
            className="text-left px-[1rem] py-[0.5rem] bg-[#F0F2F5] hover:bg-[#e3e5e7] rounded-[2rem] ml-2"
          >
            <h3 className="text-[#65676B] font-[400]">What's on your mind?</h3>
          </button>
        </div>
        <hr />
        <div className="flex items-center justify-around mt-[1rem]">
          <button className="flex items-center btn-transparent w-[33%] justify-center">
            <FaVideo className="text-[red] h-[24px] w-[24px] mr-2" />
            <span className="text-[#65676B] font-[600]">Live video</span>
          </button>
          <button className="flex items-center btn-transparent w-[33%] justify-center">
            <MdPhotoLibrary className="text-green h-[24px] w-[24px] mr-2" />
            <span className="text-[#65676B] font-[600]">Photo/video</span>
          </button>
          <button className="flex items-center btn-transparent w-[33%] justify-center">
            <FaFlag className="text-blue h-[24px] w-[24px] mr-2" />
            <span className="text-[#65676B] font-[600]">Life event</span>
          </button>
        </div>
      </Card>
      <Card className="p-[15px]">
        <div className="flex items-center justify-between mb-3">
          <h2>Posts</h2>
          <div className="flex items-center">
            <button className="btn-secondary px-3 mr-2">
              <GiSettingsKnobs className="rotate-90 mr-1" />
              Filters
            </button>
            <button className="btn-secondary px-3">
              <IoMdSettings className="mr-1" />
              Manage posts
            </button>
          </div>
        </div>
        <hr />
        <Tabs
          activeTab={activePostsTab}
          setActiveTab={setActivePostsTab}
          tabs={[
            {
              id: "list",
              label: (
                <>
                  <FaList className="mr-1" />
                  List view
                </>
              ),
              renderHeader,
              renderActiveHeader,
              type: "tab",
              content: "",
            },
            {
              id: "grid",
              label: (
                <>
                  <RiLayoutGridFill className="mr-1" />
                  Grid view
                </>
              ),
              renderHeader,
              renderActiveHeader,
              type: "tab",
              content: "",
            },
          ]}
          isFullWidth
        />
      </Card>
      {activePostsTab === "list" && listViewContent}
      {activePostsTab === "grid" && gridViewContent}
    </div>
  );

  let handleBlueAnchorClick = (value) => {
    setShowEditDetailsModal(false);
    setActiveTab("about");
    setActiveVerticalTab(value?.href);
  };

  let renderEditDetailsFields = (fields) => {
    return fields.map((field) => {
      return (
        <div key={field.id}>
          {field.values.map((value, index) => {
            return (
              <BlueOutlineAnchor
                className="mt-5"
                label={index === 0 && field.label}
                value={value.label}
                onClick={() => handleBlueAnchorClick(value)}
              />
            );
          })}
        </div>
      );
    });
  };

  const editDetailsModal = showEditDetailsModal && (
    <Modal className="w-[700px]" onClose={() => setShowEditDetailsModal(false)}>
      <div className="edit-details-modal">
        <div className="edit-details-modal-header">
          <h2 className="ml-auto">Edit details</h2>
          <VscClose
            className="ml-auto text-[#6d6b6b] p-[1px] bg-[#f3f3f3] rounded-[100px] h-[36px] w-[36px] cursor-pointer"
            onClick={() => setShowEditDetailsModal(false)}
          />
        </div>
        <hr />
        <div className="edit-details-modal-body">
          <h3 className="font-[600]">
            Customise your Intro
            <span className="">Details you select will be public.</span>
          </h3>
          {renderEditDetailsFields(editDetailsFields)}
          <div className="flex flex-row justify-between items-center mt-5">
            <h3 className="font-[600]">
              Websites
              <span className="!text-[13px]">
                To feature links on your Profile, set the audience to{" "}
                <b>Public.</b>
              </span>
            </h3>
            <button className="btn-secondary px-4">
              Public <MdOutlinePublic className="ml-1" />
            </button>
          </div>
          <div className="flex flex-row justify-between items-center mt-5">
            <h3 className="font-[600]">
              Social links
              <span className="!text-[13px]">
                To feature links on your Profile, set the audience to{" "}
                <b>Public.</b>
              </span>
            </h3>
            <button className="btn-secondary px-4">
              Public <MdOutlinePublic className="ml-1" />
            </button>
          </div>
        </div>
        <hr />
        <div className="edit-details-modal-footer">
          <button
            className="btn-transparent px-4 text-blue"
            onClick={() => handleUpdateInformation()}
          >
            Update your information
          </button>
          <div className="flex">
            <button
              className="btn-secondary px-4 mr-2"
              onClick={() => setShowEditDetailsModal(false)}
            >
              Cancel
            </button>
            <button className="btn-primary px-10">Save</button>
          </div>
        </div>
      </div>
    </Modal>
  );

  const handleUpdateInformation = () => {
    setShowEditDetailsModal(false);
    setActiveTab("about");
    setActiveVerticalTab("overview");
  };

  return (
    <div className="posts">
      {leftCards}
      {rightCards}
      {editDetailsModal}
    </div>
  );
}

export default Posts;
