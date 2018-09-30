export default {
  changeCity(state, item){
    state.city = item;
    try{
      if(localStorage.city){
        localStorage.city = JSON.stringify(item);
      }
    }catch(e){
      console.warn('Browsers disabled local storage.');
    }
  }
}
