import { Button } from 'antd';
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { ContextInterface, loginContext } from '../../contexts';

type Props = {}

/**
 * Renders Dashboard, Here context api is used to check whether
 * the user is Loggin in or not if no then redirect to Login page
 * Since we might need this redirection mechanism on other 
 * pages with protected Routes we will seperate this logic to
 * hoc in future
 * @param param0 
 * @returns 
 */

export function Dashboard({ }: Props) {
  const navigate = useNavigate();
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(loginContext) as ContextInterface;
  useEffect(()=>{
    if (!isUserLoggedIn) {
      navigate({ pathname: "/login" });
    }
  },[isUserLoggedIn,navigate]);
 
  return (
    <div>Dashboard
      <Button onClick={()=> setIsUserLoggedIn(false)}>Logout</Button>
    </div>
  )
}
