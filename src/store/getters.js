export const singer = state => state.singer //箭头函数的简写function state (){return state.singer}

export const currentSong = (state) => {
  return state.playlist[state.currentIndex] || {}
}


