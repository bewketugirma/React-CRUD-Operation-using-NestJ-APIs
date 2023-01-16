# React-CRUD-Operation-using-NestJs-APIs
CRUD Operation using React and NestJs APi

This web application is for registering organization's employee hierarchy or structure
1. shall create employee position/role
2. the position should be hierarchical there is a parent child relationship between the positions
  e.g. CEO can be root position no parent and CFO is a child of CEO
3. shall get and list the positions in a tree mode with unlimited n positions
e.g.

        CEO
        ├── CTO
        │   └── Project Manager
        │       └── Product Owner
        │           ├── Tech Lead
        │           │   ├── Frontend Developer
        │           │   ├── Backend Developer
        │           │   ├── DevOps Engineer
        │           │   └── ..
        │           ├── QA Engineer
        │           ├── Scrum Master
        │           └── ...
        ├── CFO
        │   ├── Chef Accountant
        │   │   ├── Financial Analyst
        │   │   └── Account and Payable
        │   └── Internal Audit
        ├── COO
        │   ├── Product Manager
        │   ├── Operation Manager
        │   ├── Customer Relation
        │   └── ...
        └── HR
4. shall click on the list and get one of employee positions and update/delete it
5. The app have routing, api call, state management(desirable),
6. The forms in the app should be [Rect Hook Form](https://www.react-hook-form.com/) and have validation

### Resources used 
- Framework [Mantine](https://mantine.dev/)
- Styles [TailwindCss](https://tailwindcss.com/)
- State Management [Redux Toolkit](https://redux-toolkit.js.org/)
- Validation [Yub](https://www.npmjs.com/package/yup) - Not Mandatory
- Http request [Axios](https://github.com/axios/axios)
- From [React Hook Form](https://www.react-hook-form.com/)
- Used REST apis from the repository NestJs-CRUD-API



