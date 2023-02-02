const createHtml = (employeeStats) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
      </head>
        <link rel="stylesheet" href="./style.css">
        <title>I Need a Team!</title>
    </head>
    
    <body>
    <header id="top">MY ASSEMBLED TEAM</header>
<div class="container">
        ${createCard(employeeStats)}
</div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js" integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD" crossorigin="anonymous"></script>
</body>
    `;
};

const createCard = (employeeStats) => {
    let cardInfo = '';
    employeeStats.forEach((employee) => {
        if (employee.getPosition() === 'Manager') {
            cardInfo += 
            ` 
            <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${employee.getName()}</h5>
            <p class="card-text"> 💼 ${employee.getPosition()}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${employee.getId()}</li>
            <li class="list-group-item">EMAIL: <a href="mailto:${employee.getEmail()}" class="card-link">${employee.getEmail()}</a></li>
            <li class="list-group-item">OFFICE NUMBER: <a href="#" class="card-link">${employee.getOfficeNumber()}</a></li>
          </ul>
        </div>
        `;
        } else if (employee.getPosition() === 'Engineer') {
            cardInfo += 
            `
            <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${employee.getName()}</h5>
          <p class="card-text">👷 ${employee.getPosition()}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${employee.getId()}</li>
          <li class="list-group-item">EMAIL: <a href="mailto:${employee.getEmail()}" class="card-link">${employee.getEmail()}</a></li>
          <li class="list-group-item">GITHUB: <a href="https://github.com/${employee.getGithub()}" class="card-link">${employee.getGithub()}</a></li>
        </ul>
      </div>
        `;
        } else if (employee.getPosition() === 'Intern') {
            cardInfo +=
            `
            <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${employee.getName()}</h5>
          <p class="card-text">🧑‍🎓 ${employee.getPosition()}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${employee.getId()}</li>
          <li class="list-group-item">EMAIL: <a href="mailto:${employee.getEmail()}" class="card-link">${employee.getEmail()}</a></li>
          <li class="list-group-item">SCHOOL: <a href="https://www.southharmoninstituteoftechnology.org/" class="card-link">${employee.getSchool()}</a></li>
        </ul>
      </div>
    </div>
         `;
        }
    });

    return cardInfo;
}

module.exports = createHtml;