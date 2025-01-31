
const idToChange = "main-content"



function loadItems() {

    const header = `
<ul style="display: flex; list-style-type: none; justify-content: space-between;">
            <li>
                Akash Bansal
            </li>
            <li style="width: 500px;">
                <ul style="display: flex; list-style-type: none; justify-content: space-evenly;">
                    <li> 
                    <a href='/'>
                        Home

                    </a>
                    </li>
                    <li>
                    <a href="/blogs">
                    Blogs
                    </a>    
                    </li>
                    <li>
                        <a href="/contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </li>
        </ul>

`

    headerItem = document.getElementById("header").innerHTML = header

}

