const MY_POST = "mypost";

export function myPostReducer(
  state = {
    post: [
      {
        id: 1,
        title: "TARUN",
        subtitle: "Student/expert at institution",
        img:
          "https://satishrao.in/wp-content/uploads/2016/06/dummy-profile-pic-male.jpg",

        data:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        id: 2,
        title: "UJJAWAL",
        subtitle: "Student/expert at institution",
        img:
          "https://satishrao.in/wp-content/uploads/2016/06/dummy-profile-pic-male.jpg",
        data:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        id: 3,
        title: "TANISHA",
        subtitle: "Student/expert at institution",
        img:
          "https://satishrao.in/wp-content/uploads/2016/06/dummy-profile-pic-male.jpg",
        data:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        id: 4,
        title: "NIKHIL",
        subtitle: "Student/expert at institution",
        img:
          "https://satishrao.in/wp-content/uploads/2016/06/dummy-profile-pic-male.jpg",
        data:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        id: 5,
        title: "ANNIRUDH",
        subtitle: "Student/expert at institution",
        img:
          "https://satishrao.in/wp-content/uploads/2016/06/dummy-profile-pic-male.jpg",
        data:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    ]
  },
  action
) {
  switch (action.type) {
    case MY_POST:
      return {
        post: [...state.post]
      };
      break;
    default:
  }

  return state;
}
