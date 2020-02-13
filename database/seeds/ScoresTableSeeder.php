<?php

use Illuminate\Database\Seeder;
use App\Models\Score;

class ScoresTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $quote_array = [
            ["Babe Ruth", 12, 24, "Lorem ipsum dolor sit amet, dicta vituperata deterruisset in his! Usu omnium eripuit praesent ut! Paulo maiestatis mel id. Est nonumy partiendo ne, salutatus intellegam reformidans pri ea."],
            ["Willie Mays", 23, 54, "Quot illud moderatius vis te! Omittantur signiferumque duo ei. Eam ex quaestio platonem suscipiantur! His partem liberavisse ne. Dolorum omittam epicurei qui at, at usu tollit animal atomorum, nemore splendide instructior ad pri."],
            ["Barry Bonds", 52, 25, "Nec in nihil tempor postulant, graece maiorum interpretaris qui no, summo ancillae insolens sit in. Ei partem feugiat eos, option saperet interesset mea ad, zril integre debitis no vel? Mea ei soluta maiorum, vel ex aperiam temporibus."],
            ["Ted Williams", 34, 56, "Error melius te eos! Id pri putant dicunt minimum, cum an iusto dicit! Id affert maiorum urbanitas usu, ex usu debitis perfecto persequeris. Vidisse scribentur instructior ex per, qui ne elitr ignota, et his suas aliquip perpetua."],
            ["Hank Aaron", 56, 55, "Amet prodesset pri id, vidit solum affert an mel. Te esse iracundia sadipscing duo. Harum theophrastus nam cu, maiestatis signiferumque qui et. Ex eros conclusionemque mel?"],
            ["Ty Cobb", 54, 34, "Populo impetus prodesset his in, no qui vide recteque reprehendunt. Putant deleniti consulatu eam ex, voluptua facilisis reprehendunt sea ex, delicata definiebas nam cu. Quo ubique feugait ex. Mollis noluisse cu nec, esse reformidans te vim, ne per legere dissentiet?"],
            ["Lou Gehrig", 89, 87, "Te duo veniam adipisci. Etiam saperet mentitum duo ne, qui cu vitae disputationi, sea tale possim omittantur id. Atqui tantas ex qui, sed integre ceteros pertinacia ad, mel fugit insolens no? Homero efficiantur eu per, erat percipitur cum id?"],
            ["Walter Johnson", 43, 67, "Qualisque adolescens vim ne! Nam at mutat cetero, bonorum dolores ad vim? Vim graeci iisque vulputate eu, meliore facilis sea at. Ius nostrum philosophia in? Vel maiestatis philosophia ex, eam dicta harum habemus cu."],
            ["Cy Young", 33, 35, "At stet brute dictas cum? An duo simul facilis convenire, te labore blandit sit, eu putent latine consequat eam. Pro in dicunt vidisse persequeris. Ea sed idque dolore, est vero noluisse repudiandae ei?"],
            ["Rogers Hornsby", 45, 84, "Ne qui mutat eirmod. Vis alienum accusam verterem te! In pro sumo tacimates assentior, pertinax hendrerit eu cum! Ei clita audiam definitiones usu? No eos porro etiam!"],
        ];
        for ($i = 0; $i < sizeof($quote_array); $i ++) {
            Score::create([
	            'name' => $quote_array[$i][0],
	            'answeres' => $quote_array[$i][1],
	            'points' => $quote_array[$i][2],
	            'comments' => $quote_array[$i][3]
	        ]);
    	}
    }
}
