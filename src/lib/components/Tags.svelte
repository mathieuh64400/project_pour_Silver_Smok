<script lang="ts">
export let Tagtext:string;
</script>

<div class="hexagone rep">
    <p>
{Tagtext}</p>
</div>
<style>
    .hexagone {
  box-sizing : border-box;
  position : relative;
  width : 121.24356px;
  height : 70px;
  background-color: #673FD7;
  margin : 35px 0;
}
.hexagone:before,
.hexagone:after {
content : "";
  box-sizing : border-box;
  position : absolute;
  width : 0;
  border-left : 60.62178px solid transparent;
  border-right : 60.62178px solid transparent;
}
.hexagone:after {
  top : 100%;
  width : 0;
  border-top : 35px solid #673FD7;
}
.hexagone:before {
  bottom : 100%;
  border-bottom : 35px solid #673FD7;
}
.rep{
    display: flex;
    align-items: center;
    justify-content: center;
}
p{
    color :white;
    background-color: transparent;
    text-align: center;
}
</style>