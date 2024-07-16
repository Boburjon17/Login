import { useCallback } from "react";
import { useSelector } from "react-redux";

const ValidationError = () => {
  const { error } = useSelector((state) => state.auth);

  const errorMessage= useCallback(()=>{
    return Object.keys(error).map(name=>{
      const message= error[name].join(', ')
      return   `${name} -  ${ message}`
    })

  },[error])

  return (
    error != null && (
     errorMessage().map(error=>{
        return <div key={error} className="alert alert-primary" role="alert"> {error}</div>
     })
    )
  );
};

export default ValidationError;
