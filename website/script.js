//import { Octokit, App } from "https://esm.sh/octokit?dts";

window.addEventListener("load", async function(e){
    console.log("tst");

    /*const octokit = new Octokit({
        auth: 'YOUR-TOKEN'
    })
      
    await octokit.request('GET /repos/{owner}/{repo}/zipball/{path}', {
        owner: 'OWNER',
        repo: 'REPO',
        path: 'PATH',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
    })*/
	fetch("https://github.com/Miner1e/RPGItems/raw/main/assets.zip", {
		method: "GET",
		redirect: "follow",
		headers: {
			'Access-Control-Allow-Origin':''
		}
	}).then(result => {console.log(result)});
    console.log("tst");
});
