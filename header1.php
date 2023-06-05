<header>
	<a href="index.php">
		<div class="logo">			
				<span class="deco">.</span>
				<img src="image/logo.jpg" class="icon" alt="logo">
				<span class="name">Lifella</span>
		</div>
	</a>
		<nav class="content">
			<ul class="lists">
				<li><a href="index.php">Home</a></li>
				<li><a href="index.php">Contact us</a></li>
				<li><a href="index.php">Social Media</a></li>				
			</ul>
		</nav>
</header>
	<style type="text/css">
			@media (prefers-reduced-motion: no-preference) {
	  * {
	    scroll-behavior: smooth;
	  }
	}

	*{
		margin: 0;
		padding: 0;
		font-family: sans-serif;	
	}

	.icon{
		border-radius: 30%;
		width: 40px;
		height: 45px;
	}
	.name{
		font-size: 35px;
		font-weight: bold;
		color: #C8B8B9;
		letter-spacing: 3px;
		margin: -10px;
		margin-top: 2px;

	}
	.logo{
		display: flex;
		margin: 5px;
		position: absolute;
		top: 2px;
	}
	.deco{
		font-size: 90px;
		color: red;
		position: absolute;
		top: -70px;
		left: 80px;
		margin: 0;
	}
	header{
		width: 100%;
		height:60px;
		background-color: #0A0C47;
		display: flex;
		justify-content: space-between;
	 	align-items: center;
		position: fixed;
	 	top: 0;
	 	z-index: 1;
	}
	nav ul{
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		flex-wrap: wrap;
		padding-inline-start: 0;
		margin-block: 0;
		height: 30%;
		background-color: #2A0305;

	}
	.content{
		width: 40%;
		max-width: 400px;
		position: absolute;
		right: 0px;
	}
	@media screen and (max-width: 900px){
		.content{
			width: 65%;
		}
		
	}
	nav ul li{
		margin-left: 10px;
		color: #CAE4F8;
		list-style: none;
		padding: 20px 0;
	  margin-right: 10px;
	}
	nav ul li:hover{
		border-top: 2px solid #09B7F7;

	}
	a{
		text-decoration: none;
		color: #898B8C;
	}
	a:hover{
		color: #09B7F7;
	}
</style>