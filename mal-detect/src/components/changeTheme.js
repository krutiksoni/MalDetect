const changeTheme = (darkTheme, setDarkTheme) => {
    // Update CSS variables when darkTheme changes
    document.documentElement.style.setProperty(
      '--primary-color',
      darkTheme ? '#86aaf9' : '#6196a6'
    );
  
    // Update background color based on darkTheme
    document.body.style.backgroundColor = darkTheme ? '#272e3f' : '#ffffff';
  
    // Update --secondary-body-text-color based on darkTheme
    document.documentElement.style.setProperty(
      '--secondary-body-text-color',
      darkTheme ? '#ffffff' : '#20242c'
    );
  
    // Update --body-text-color based on darkTheme
    document.documentElement.style.setProperty(
      '--body-text-color',
      darkTheme ? '#ffffff' : '#4d5056'
    );
  
    // Update --body-text-black-color based on darkTheme
    document.documentElement.style.setProperty(
      '--body-text-black-color',
      darkTheme ? '#ffffff' : '#000000'
    );
  
    // Update --secondary-color based on darkTheme
    document.documentElement.style.setProperty(
      '--secondary-color',
      darkTheme ? '#272e3f' : '#ffffff'
    );
  };
  
export default changeTheme;
  