class ProjectManagementTool {
    constructor() {
        this.collaboration = true;
        this.success = true;
    }

    empowerTeam() {
        console.log("Empower your team to achieve greatness!");
    }

    isBuiltForCollaboration() {
        if (this.collaboration) {
            console.log("Our project management tool is built for collaboration.");
        } else {
            console.log("Our project management tool may not be optimized for collaboration.");
        }
    }

    isSuccessDriven() {
        if (this.success) {
            console.log("Our project management tool is success-driven.");
        } else {
            console.log("Our project management tool may not be optimized for success.");
        }
    }
}

// 示例用法
const projectManager = new ProjectManagementTool();

// 增强团队
projectManager.empowerTeam();

// 检查是否为协作构建
projectManager.isBuiltForCollaboration();

// 检查是否为成功驱动
projectManager.isSuccessDriven();
