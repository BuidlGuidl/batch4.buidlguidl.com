import React from "react";

const ProfilePage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 bg-white shadow-md rounded-lg">
        <div className="p-6">
          <div className="text-center">
            <div className="flex items-center justify-center">
              <img
                className="w-32 h-32 rounded-full"
                src="https://i.seadn.io/gcs/files/b0ebfd64a3bf9b624f7eef24885aa1ce.png?auto=format&dpr=1&w=256"
                alt="Profile Picture"
              />
              <div className="ml-4">
                <h1 className="text-xl font-bold text-black">Pedro Peres</h1>
                <p className="text-sm text-gray-600">
                  Blockchain Developer, experienced in Venture Capital and entrepreneur.
                </p>
                <a
                  href="https://twitter.com/pedroncperes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:underline"
                >
                  Twitter Profile
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8 justify-center">
            <div className="overflow-hidden rounded-md">
              <img
                src="https://media.licdn.com/dms/image/D4D22AQFFG11mJ0g3Vw/feedshare-shrink_2048_1536/0/1712006005067?e=1715817600&v=beta&t=pIkW7Jm_-dOJhPzhOj_eP5ZpsZIXn0PY1ooXLsp05Kw"
                alt="Image 1"
                className="w-48 h-48 object-cover mx-auto"
              />
            </div>
            <div className="overflow-hidden rounded-md">
              <img
                src="https://media.licdn.com/dms/image/D4D22AQG1kBSmftQEYw/feedshare-shrink_2048_1536/0/1705928760970?e=1715817600&v=beta&t=zIcDoCo7KUMxn49Aexh4NgbwAEv37NTtKPb6-lY8IYc"
                alt="Image 2"
                className="w-48 h-48 object-cover mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
