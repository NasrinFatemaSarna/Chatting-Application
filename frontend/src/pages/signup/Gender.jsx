


const Gender = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex mt-2">
      <div className="form-control">
        <label className={`cursor-pointer gap-2 label ${ selectedGender === 'male' ? 'text-green-600' : ''}`}>
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-success"
            checked={selectedGender === 'male'}
            onChange={() => onCheckboxChange('male')}
          />
        </label>
      </div>
      <div className="form-control">
        <label className={`cursor-pointer gap-2 label ${ selectedGender === 'female' ? 'text-green-600' : ''}`}>
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox checkbox-success"
            checked={selectedGender === 'female'}
            onChange={() => onCheckboxChange('female')}
          />
        </label>
      </div>
    </div>
  );
};

export default Gender;


// const Gender = () => {
//     return (
//       <div className="flex mt-2 ">
        
        
//          <div className="form-control">
//     <label className="cursor-pointer gap-2 label">
//       <span className="label-text">Male</span>
//       <input type="checkbox"  className="checkbox checkbox-success" />
//      </label>
//     </div>
//     <div className="form-control">
//     <label className="cursor-pointer gap-2 label">
//       <span className="label-text">Female</span>
//       <input type="checkbox"  className="checkbox checkbox-success" />
//      </label>
//     </div>
//       </div>
//     )
//   }
  
//   export default Gender