import Cookie from "universal-cookie";

const cookie = new Cookie();
let member_data: any = null;

if (cookie.get("access_token")) {
  const memberDataJson: any = localStorage.getItem("member_data")
    ? localStorage.getItem("member_data")
    : null;
    member_data = memberDataJson ? JSON.parse(member_data): null
} else {
    localStorage.removeItem('member_data')
}

console.log('===== Verify =====');
console.log(member_data);

export const verifyMemberData = member_data ? member_data : null


// Aslida bizga shu mantiq ham yetarli maqsadimizni amalga oshirish uchun:

// if(!cookie.get("access_token")) {
//     localStorage.removeItem('member_data')
// }