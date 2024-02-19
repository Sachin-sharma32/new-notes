// never use array.length && (code...) in jsx
// if you have nested ternary operators break it down into components
function Ternaries (){
    sideBarOpen = true;
    userInfoOpen = false;
    return(
        <div>
            <Sidebar sideBarOpen={sideBarOpen} userInfoOpen={userInfoOpen} />
        </div>
    )
}
function SideBar(props){
    if(!props.sideBarOpen) return null;
    return(
        <div>
            SideBar: 
            <UserInfo userInfoOpen={props.userInfoOpen} />
        </div>
    )
}

function UserInfo(props){
    // this is better than the one in the Sidebar function because it is more readable
    if(props.userInfoOpen === false) return null;
    return(
        <div>
            UserInfo
        </div>
    )
}
// for the above code the flow show go from top to bottom means keep the main component at the and then the sub components
// use props. instead of extracting props at the top of the function for better understanding