

const Message = () => {
    return (
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-12 rounded-full">
            <img
              alt="User avatar"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500`}> Hi! What is upp?</div>
        <div className="chat-footer text-xs flex gap-1 items-center opacity-50">10:05</div>
      </div>
    );
  };
  
  export default Message;
  
