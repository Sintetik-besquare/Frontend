# Steps to run the project

1. Fork the project to own repository
2. Clone it down to local machine 
3. Open the project in vscode
4. Run $ docker-compose up 

## Naming Convention Based on Deriv.com
### kebab-case
use kebab-case for file-names and folder-names
- i.e. `assets`, `views`, `components`, `services`, `utils`

### PascalCase
use PascalCase for ComponentNames
- i.e. `NavBar`, `Header`, `Footer`, `ContactUs`, `AboutUs`


### Example
```
import NavBar from "./views/components/navbar.js"
import Header from "./views/components/header.js"
import HomePage from "./views/home/index.js"

return (
    <div>
        <NavBar/>
        <Header/>
        <HomePage/>
    </div>
)

export default App
```

