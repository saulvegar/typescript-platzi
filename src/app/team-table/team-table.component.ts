import { Component, OnInit } from '@angular/core';
import { TeamService, TeamsTableHeaders } from '../services/team.service';
import { Observable } from 'rxjs';
import { Team } from '../interfaces/team';
import { take } from 'rxjs/operators';
import { Country } from '../interfaces/player';

@Component({
  selector: 'app-team-table',
  templateUrl: './team-table.component.html',
  styleUrls: ['./team-table.component.scss']
})
export class TeamTableComponent implements OnInit {
  public teams$: Observable<Team[]>;
  public tableHeaders = TeamsTableHeaders;

  constructor(
    private teamService: TeamService,
  ) {
    this.teams$ = this.teamService.getTeams();
  }
    
  ngOnInit(): void {
    this.teamService.getTeams().pipe(
      take(1)
    )
    .subscribe(teams => {
      if (teams.length === 0) {
        const team: Team = {
          name: 'My Amazing Team',
          country: Country.Argentina,
          players: [],
        };
        this.teamService.addTeam(team);
      }
    });
  }

}
