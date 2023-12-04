<template>
    <footer>
        <div class="divider"></div>
        <p>designed and developed by</p>
        <h2>Jean-Eric Espiegle</h2>
    </footer>
</template>

<script>
export default{
    name: "FooterBar"
}
</script>

<style scoped>
footer{
    position:fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 7.5%;
    padding-bottom: 0.5%;
    background: #94948E;
    color: black;
}
footer p{
    color: white;
    font-weight: bold;
}
.divider{
    display: block;
    z-index: 20;
    width: 100%;
    height: 50%;
    background: linear-gradient(to bottom,#3B322C,#94948e00);
}
footer h2{
    margin: 0 !important;
    padding: 0;
    line-height: 1;
    font-weight:700;
    color: #3B322C;
}
</style>