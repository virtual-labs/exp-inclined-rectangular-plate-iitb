let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>Hydrostatic Force on Inclined Rectangular Plate</h5>
        <p>Learning Objective: Calculate  <span style='display: inline-block;' >$$ \\overline h $$</span>, Area of plate and total pressure force </p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Caculate total pressure", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>

        <h5>A rectangular plate is ${width} m wide and ${depth} m deep lies in a water making an angle of ${angle}&deg; with the free water surface. If h is ${h} m, Find the total pressure force & position of the total pressure force.</h5>
        <br>

        <div style='text-align: center;'><img style='width: 30%;' src='./images/sim1.png'></div>


        <p style='text-align: center; font-size: 18px;'>
            <span style='display: inline-block;' >
                $$ \\overline h = \\frac{d}{2}sin(\\theta) + h $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal1-inp' > <span id='cal1-val-sp'></span> m
        </p>


        <p style='text-align: center; font-size: 18px;'>
            Area of rectangular plate
            <span style='display: inline-block;' >
                $$ = width \\times depth  $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal2-inp' > <span id='cal2-val-sp'></span> m<sup>2</sup>
        </p>

        <br>

        <p style='text-align: center' > <span style='display: inline-block;' >$$ take \\ \\rho = 1000 \\ kg/m^3  $$</span></p>
        <p style='text-align: center' > <span style='display: inline-block;' >$$ take \\ g = 9.81 \\ m/s^2  $$</span></p>

        <p style='text-align: center; font-size: 18px;'>
            Total pressure force =
        <span style='display: inline-block;' >
            $$ \\rho \\times g \\times A \\times \\overline h  $$
        </span>
        = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal3-inp' > <span id='cal3-val-sp'></span> N
    </p>

   

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_a1();'  id='temp-btn-120' >Verify</button></div>
        

    
        <br> 

        <div id='nxt' style='display: none;'>
            <div id='tab-1'></div>
        </div>
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    show_step('tb1-box');
    setTimeout(() => { MathJax.typeset(); }, 300);
    internal_calculations();
}
function internal_calculations() {
    h_bar = (depth / 2) * Math.sin((Math.PI / 180) * angle) + h;
    A = width * depth;
    F = 1000 * 9.81 * A * h_bar;
}
function verify_a1() {
    let btn = document.getElementById('temp-btn-120');
    console.log(`h_bar => ${h_bar}, area => ${A}, pressure => ${F}`);
    let inp1 = document.getElementById('cal1-inp');
    let sp1 = document.getElementById('cal1-val-sp');
    let inp2 = document.getElementById('cal2-inp');
    let sp2 = document.getElementById('cal2-val-sp');
    let inp3 = document.getElementById('cal3-inp');
    let sp3 = document.getElementById('cal3-val-sp');
    if (!verify_values(parseFloat(inp1.value), h_bar)) {
        alert('The h bar is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), A)) {
        alert('Area is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp3.value), F)) {
        alert('Pressure value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(h_bar).toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${A.toFixed(4)}`;
    inp3.remove();
    sp3.innerText = `${F.toFixed(4)}`;
    alert('Your entered values are correct!!');
    let ele = document.getElementById('nxt');
    ele.style.display = 'block';
    activity2();
}
activity1();
//# sourceMappingURL=activity1.js.map