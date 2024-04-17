import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "react-oidc-context";

function Dashboard() {  
  const auth = useAuth();

  const [studentDetail, setStudentDetail] = useState(null)
  const fectStudentDetail = async () => {
    const result = await axios.get(`https://api-gateway.psu.ac.th/Test/regist/level2/StudentDetailCampus/01/token`, {
      headers: {
        credential: 'api_key=ZsB/vDqTm8vFOkyI1gYArrN/AGfXhqNT',
        token: auth.user.access_token 
      }
    })
    setStudentDetail(result.data.data[0])
  }
  useEffect(() => {
    if(auth.isAuthenticated){
      fectStudentDetail()
    }
  }, auth.user)
  //console.log(auth.user.access_token)
  return (
    <div>
      Hello {studentDetail ? studentDetail.studNameThai : '...'}
    </div>
  );
}

export default Dashboard;
