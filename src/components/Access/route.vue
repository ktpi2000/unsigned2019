<template lang="pug">
div
  .modal-card(width="300")
    header.modal-card-head
      .modal-card-title 会場までの道順
    section.modal-card-body
      p 正門から入って左折します
      img(src="@/assets/img/route/route001.jpg" alt="route001")
      p 直進していきます
      img(src="@/assets/img/route/route002.jpg" alt="route002")
      p 駐輪場に近づいたら右折です
      img(src="@/assets/img/route/route003.jpg" alt="route003")
      p 
        | 5階建ての建物の4FでUnsignedやってます。
        br
        | 入り口は矢印のところです。
      img(src="@/assets/img/route/route004.jpg" alt="route004")
      p これが入り口です。
      img(src="@/assets/img/route/route005.jpg" alt="route005")
      p 自動ドアを通って右に進みます。
      img(src="@/assets/img/route/route006.jpg" alt="route006")
      p 階段で4Fまで登ったら到着！
      img(src="@/assets/img/route/route007.jpg" alt="route007")
    footer.modal-card-foot
      button.button.is-rounded.is-medium( @click="$parent.close()") close
</template>

<style scoped>
p {
  margin-top: 35px;
  text-align: left;
  font-size: 20px;
}
</style>