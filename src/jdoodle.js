import React, { useState } from 'react';

const Jdoodle =()=>{
        
        const [script,SetScript] = useState("")
        const [language,SetLanguage] = useState("")
        const [versionIndex,SetVersionIndex] = useState("")
        const [clientId, setClientid] = useState('723caa9037015d08221ece5bc3314d43')
        const [clientSecret, setClientsecret] = useState('59f4d4ee833fc3af1b806d9adc5800af7f163f744139e24cab57bd17f885a235')
        const PostData =() =>
        {
            fetch("/execute",{
                method:"post",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    script,
                    language,
                    versionIndex,
                    clientId,
                    clientSecret
                    
                })
            }).then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.error)
                {
                    alert(data.error);
                }
                else
                {
                    
                    console.log(data.output);
                    alert("output : "+data.output);

                }
            })
        }

        return(
            <>
  <div class="containerconsole">
  <h1 style={{color: '#C9781A',padding:'20px'}}>Console</h1>
  <div style={{padding:'25px'}}>
    <div class="row2">
      <div class="col-25">
        <label for="language">Programming Language</label>
      </div>
      <div class="col-75">
        <select id="lang" 
        name="lang"
        value={language}
        onChange={(e) => SetLanguage(e.target.value)} >
          <option value="nodejs">nodejs</option>
          <option value="java">java</option>
          <option value="php">PHP</option>
        </select>
      </div>
    </div>

    <div class="row2">
      <div class="col-25">
        <label for="versionIndex">VersionIndex</label>
      </div>
      <div class="col-75">
        <select id="country"
         name="country"
         value={versionIndex}
         onChange={(e) => SetVersionIndex(e.target.value)}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
    </div>

    <div class="row2">
      <div class="col-25">
        <label for="Script">Script</label>
      </div>
      <div class="col-75">
        <textarea id="script"
         name="script" 
         value={script}
         onChange={(e) => SetScript(e.target.value)} 
         placeholder="Write your script and click run" 
         style={{height:'200px'}}></textarea>
      </div>
    </div>
    <div class="row2">
    <button style={{marginLeft:'45%',marginTop:'10px'}} className="btn-primary" onClick={()=>PostData()}>submit</button>
    </div>
  </div>
</div>
            </>
        );
}
export default Jdoodle;