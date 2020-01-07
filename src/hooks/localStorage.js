export const useGuestUserId = () => {
    let guest_user_id = localStorage.getItem('guest_user_id');
    if (guest_user_id == null) {
      let generate_string = Math.random().toString(36).substring(2, 33) + Math.random().toString(36).substring(2, 33);
      localStorage.setItem('guest_user_id', generate_string);
    }
    return guest_user_id;
  }
  
  