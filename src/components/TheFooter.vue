<template>
  <footer>
    <div class="page-footer font-small blue pt-4">
        <div class="container-fluid text-center text-md-left">
            <div class="row">
                <div style="padding-left:5rem;" class="col-md-6 mt-md-0 mt-3">
                    <h5 class="text-uppercase">Random joke:</h5>
                    <p>What is a ghost's favourite data type? >> Booooolean</p>
                </div>
                <hr class="clearfix w-100 d-md-none pb-3">
                <div class="col-md-3 mb-md-0 mb-3">
                    <h5 class="text-uppercase">Links</h5>
                    <ul class="list-unstyled">
                        <li><a href="#!">Link 1</a></li>
                        <li><a href="#!">Link 2</a></li>
                        <li><a href="#!">Link 3</a></li>
                        <li><a href="#!">Link 4</a></li>
                    </ul>
                </div>
                <div class="col-md-3 mb-md-0 mb-3">
                    <h5 class="text-uppercase">Links</h5>
                    <ul class="list-unstyled">
                        <li><a href="#!" >Link 1</a></li>
                        <li><a href="#!">Link 2</a></li>
                        <li><a href="#!">Link 3</a></li>
                        <li><a href="#!">Link 4</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style>
footer {
  background-color: #5e6768;
  color: white;
  padding-top: 10px;
}
footer img {
  float: left;
  margin-right: 20px;
  margin-left: 20px;
}
footer p {
  margin-top: 10px;
}
footer a{
    text-decoration: none;
    color:white;
}
footer a:hover{
    color:white;
}
</style>