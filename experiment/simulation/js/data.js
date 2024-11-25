// all variables
let l_pressure = Math.round(Math.random() * 20 + 70);
let h_pressure = Math.round(Math.random() * 15 + 125);
let dP = 0.15;
let diff_pressure = (h_pressure - l_pressure) * 10000;
let bulk_modulus = 0;
let compressibility = 0;
let width = 2 + parseFloat((Math.random() * 2).toFixed(1));
let depth = 4 + parseFloat((Math.random() * 2).toFixed(1));
let angle = parseInt((Math.random() * 15 + 30).toFixed(0));
let h = 1.5 + parseFloat((Math.random() * 0.5).toFixed(1));
let h_bar = 0;
let A = 0;
let F = 0;
let Ig = 0;
let h_star = 0;
//# sourceMappingURL=data.js.map